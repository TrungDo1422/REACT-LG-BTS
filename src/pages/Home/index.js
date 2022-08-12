import React from "react";
import Concern from "~/components/Concern";
import CTA from "~/components/CTA";
import Popular from "~/components/Popular";
import OnePlus from "../OnePlus";


function Home() {
    return (
        <div>
            <h2>Home</h2>
            <Popular />
            <CTA/>
            <Concern/>
        </div>
    )

}

export default Home;
