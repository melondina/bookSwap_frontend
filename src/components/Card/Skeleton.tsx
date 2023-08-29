import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block" 
        speed={0.5}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#e9e9e9"
        foregroundColor="#d3d3d3"
        {...props}
    >
        <rect x="0" y="0" rx="50" ry="50" width="260" height="260" /> 
        <rect x="63" y="102" rx="0" ry="0" width="28" height="29" /> 
        <rect x="0" y="280" rx="10" ry="10" width="260" height="24" /> 
        <rect x="0" y="315" rx="10" ry="10" width="260" height="88" /> 
        <rect x="0" y="417" rx="10" ry="10" width="90" height="30" /> 
        <rect x="128" y="417" rx="10" ry="10" width="130" height="42" />
    </ContentLoader>
)

export default Skeleton;