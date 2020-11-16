import React from "react";

import Layout from "../components/Layout";
import {ExampleButton} from "../components/button";

export default function Home() {
  return (
  <Layout>
    
   <h1 style={{ color: "green", textTransform: "uppercase"}}>Hello from gatsby</h1>

   <h1>Hello People</h1>
   <ExampleButton>Click ME</ExampleButton>
    
    </Layout>
    );
};
