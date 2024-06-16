import Box from "./Box"
export default function Home() {
    const colors = ['red', 'blue', 'black', 'green', 'yellow', 'pink']
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    {colors.map((color, index) => {
                        return (
                            <Box key={index} color={color}></Box>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}