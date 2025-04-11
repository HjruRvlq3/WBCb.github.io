import React from "react"
import Serch from "./Serch"
import CatalogItem from "./CatalogItem"
import '../css/Main.css'

class Main extends React.Component {
    render() {
        return (
            <main>
                <Serch />
                <div className="catalog">
                    <div>
                        <CatalogItem />
                        <CatalogItem />
                    </div>
                    <div>
                        <CatalogItem />
                        <CatalogItem />
                    </div>
                    <div>
                        <CatalogItem />
                        <CatalogItem />
                    </div>
                    <div>
                        <CatalogItem />
                        <CatalogItem />
                    </div>
                    <div>
                        <CatalogItem />
                        <CatalogItem />
                    </div>
                    <div>
                        <CatalogItem />
                        <CatalogItem />
                    </div>
                    <div>
                        <CatalogItem />
                        <CatalogItem />
                    </div>
                    <div>
                        <CatalogItem />
                        <CatalogItem />
                    </div>
                    <div>
                        <CatalogItem />
                        <CatalogItem />
                    </div>
                </div>
            </main>
        )
    }
}

export default Main
