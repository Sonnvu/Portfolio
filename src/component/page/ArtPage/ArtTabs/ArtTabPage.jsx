import React from "react";
import TabComponent from "../../../utils/tab/TabComponent";
import BaseballTab from "../../SportPage/sportTabs/BaseballTab";
import ArtTab from "./ArtTab";
import PhotoTab from "../PhotoTabs/PhotoTab";

export default function ArtTabPage() {
    return (
        <div>
            <TabComponent items={items}/>
        </div>
    )
}

const items = [
    {
        title: "Art Works",
        content: (
            <ArtTab />
        ),
    },
    {
        title: "Music",
        content: (
            <BaseballTab />
        ),
    },
    {
        title: "Photography",
        content: (
            <PhotoTab />
        ),
    }
]