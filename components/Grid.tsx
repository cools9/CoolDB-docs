import { Card } from "./Card"

export function Grid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
            <Card title="🚀Blazingly Fast!" description="LunarDB uses your Random Access Memory (a.k.a RAM) to store keys and values on a blazingly fast response into sub-millinseconds!"/>
            <Card title="📦Packages" description="LunarDB for now has a Python package but can be extended into other Programming language later on."/>
            <Card title="🫂Community" description="LunarDB is very new, so we need your help and support for the growth and extensibility of LunarDB!"/>
            <Card title="💾C++ Written" description="LunarDB is written in C++ and Ruby, which is why it's very fast when executed."/>
            <Card title="⚙️Multimodal" description="LunarDB is a multimodal database, meaning it can be NoSQL & SQL, Schemafull and Schemaless!"/>
            <Card title="💝Support" description="Yes! You as a user or even a developer can support LunarDB!"/>
        </div>
    )
}
