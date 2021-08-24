import React, { Component } from "react";

class FullProduct extends Component {
    componentDidMount() {
        
        const myWidget = window.cloudinary.galleryWidget({
            cloudName: "on-the-rocks",
            container: "#my-gallery",
            displayProps: {
                mode: "classic",
                topOffset: 70 // to account for the menu element at the top of this documentation page
            },
            aspectRatio: "4:3",
            mediaAssets: ['hola', 'hola-2', 'Pedro', {tag: "pp"}],
            /*"displayProps": {
                "mode": "classic",
                "spacing": 15
            },
            aspectRatio: "3:4",
            transformation: {
                crop: "fill"
            },
            bgColor: "transparent",
            carouselLocation: "left",
            carouselOffset: 10,
            navigation: "always",
            thumbnailProps: {
                "mediaSymbolSize": 42,
                "spacing": 20,
                "width": 90,
                "height": 90,
                "navigationFloat": true,
                "navigationShape": "square",
                "navigationSize": 40,
                "navigationColor": "#ffffff",
                "selectedStyle": "border",
                "selectedBorderPosition": "bottom",
                "selectedBorderWidth": 4,
                "navigationIconColor": "#000000"
            },
            "navigationButtonProps": {
                "shape": "rectangle",
                "iconColor": "#ffffff",
                "color": "#000",
                "size": 52,
                "navigationPosition": "offset",
                "navigationOffset": 12
            },
            "themeProps": {
                "primary": "#000000",
                "active": "#777777"
            },
            "secureDistribution": "res-s.cloudinary.com",
            "secure": true,
            "transition": "slide",
            "carouselStyle": "thumbnails"
            displayProps: {
                mode: "classic"
            },            
            transition: "slide",
            themeProps: {
                active: "#49c58f"
            },
            aspectRatio: "square",
            zoomProps: {
                trigger: "click"
            },
            carouselLocation: "left",
            carouselStyle: "indicators",
            indicatorProps: {
                shape: "round"
            } */
        });
        myWidget.render();
    }
    render() {
        return <div id="my-gallery">hola y chau</div>;
    }
}

export default FullProduct