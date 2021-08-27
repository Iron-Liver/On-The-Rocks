import "./AdminOrders.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import OrderNew from "./orderNew";
import axios from "axios";
import verifyUser from "../../../Utils/verifyUser";
import swal from "sweetalert";
import { logOutUser } from "../../../Redux/Users/userActions";
import { useParams } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import Filters from "./filters";

const useStyles = makeStyles((theme) => ({
    paginationContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

const AdminOrdersNew = () => {
    const { search, pathname } = useLocation();
    const query = new URLSearchParams(search);

    const initialFilters = {
        order: query?.get("order")
            ? query?.get("order").toString()
            : "id-DESC-",
        filterBy: {},
        limit: 4,
    };

    (() => {
        for (const entry of query.entries()) {
            if (!["page", "order", "limit"].includes(entry[0])) {
                initialFilters.filterBy[entry[0]] = entry[1];
            }
        }
    })();

    const [orders, setOrders] = useState({});
    const [form, setForm] = useState(initialFilters);
    const [page, setPage] = useState(1);

    const history = useHistory();
    let { userId } = useParams();
    const dispatch = useDispatch();
    const classes = useStyles();
    userId = parseInt(userId);

    const kick = () => {
        dispatch(logOutUser());
        history.push("/");
        swal("Session expired", "Please login", "warning");
    };

    useEffect(() => {
        (async () => {
            try {
                const localProfile = verifyUser();
                if (localProfile?.hasOwnProperty("logout")) {
                    kick();
                }

                if (localProfile.id !== userId || !localProfile.isAdmin) {
                    history.push("/");
                }
                const body = {
                    orderBy: query?.get("order")
                        ? query.get("order").toString()
                        : "id-DESC",
                    page: query?.get("page")
                        ? parseInt(query.get("page").toString()) || 1
                        : 1,
                    itemsPerPage: query?.get("limit")
                        ? parseInt(query.get("limit").toString()) || 4
                        : 4,
                    filterBy: {},
                };

                setPage(
                    query?.get("page")
                        ? parseInt(query.get("page").toString()) || 1
                        : 1
                );

                for (const entry of query.entries()) {
                    if (!body[entry[0]]) {
                        body.filterBy[entry[0]] = entry[1];
                    }
                }

                const response = await axios.post("/order/getOrders", body);
                setOrders(response.data);
            } catch (error) {
                history.push("/");
            }
        })();
        //eslint-disable-next-line
    }, [history, userId, search]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        query.forEach((_value, key) => {
            query.delete(key);
        });

        Object.entries(form.filterBy).forEach((param) => {
            query.set(param[0], param[1]);
        });

        if (form.order !== "id-DESC-") {
            query.set("order", form.order);
        }

        if (form.limit !== 4) {
            query.set("limit", form.limit);
        }

        query.set("page", 1);

        history.push({ search: query.toString() });
    };

    const handleChange = (e) => {
        if (e.target.value === "") {
            const obj = { ...form.filterBy };
            delete obj[e.target.name];
            setForm({
                ...form,
                filterBy: obj,
            });
            return;
        }

        const obj = { ...form.filterBy };
        obj[e.target.name] = e.target.value;
        setForm({
            ...form,
            filterBy: obj,
        });
    };

    const handleReset = () => {
        setForm({
            order: "id-DESC-",
            filterBy: {},
            limit: 4,
        });
        history.push(`${pathname}?page=${page}`);
    };

    const handleSort = (e) => {
        setForm({
            ...form,
            orderBy: e.target.value,
        });
    };

    const handlePageChange = (e, val) => {
        setPage(val);
        query.set("page", val);
        history.push({ search: query.toString() });
    };

    const setOrderStatus = (status, id) => {
        const order = orders.data.find((order) => order.id === id);
        const orderIndex = orders.data.findIndex((order) => order.id === id);
        order.status = status;

        const newData = [...orders.data];
        newData[orderIndex] = order;

        setOrders({
            ...orders,
            data: newData,
        });
    };

    return (
        <div className="admin-orders-tab-container">
            <main style={{ width: "100%" }}>
                <header>
                    <Filters
                        handleSort={handleSort}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        handleReset={handleReset}
                        form={form}
                    />
                </header>
                <nav className={classes.paginationContainer}>
                    <Pagination
                        count={orders.pages}
                        page={page}
                        onChange={handlePageChange}
                        size="small"
                    />
                </nav>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "20px 0",
                        minHeight: "83.6vh",
                    }}
                >
                    {orders.data &&
                        orders.data.map((order) => (
                            <OrderNew
                                order={order}
                                key={Math.random()}
                                handleSubmit={handleSubmit}
                                setOrderStatus={setOrderStatus}
                            />
                        ))}
                </div>
                <nav className={classes.paginationContainer}>
                    <Pagination
                        count={orders.pages}
                        page={page}
                        onChange={handlePageChange}
                        handleReset={handleReset}
                        size="small"
                    />
                </nav>
            </main>
        </div>
    );
};

export default AdminOrdersNew;
