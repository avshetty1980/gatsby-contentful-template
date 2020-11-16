import React from "react";

import Layout from "../components/Layout";
import productStyles from "../components/products.module.css";

const products = () => {
    return (
        <Layout>
            <div className={productStyles.page}>
                <h1>These are our products</h1>

            <p className={productStyles.page}>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in
                 culpa qui officia deserunt mollit anim id 
                 est laborum
            </p> 
            </div>
        </Layout>
    );
};

export default products;