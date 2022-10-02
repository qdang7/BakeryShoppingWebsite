import React from "react";
import FeatureItem from "./components/FeatureItem";
import "./Home.css";
interface IProps {

}
const Home: React.FC<IProps> = () => {
    return (
        <div className="container-fluid">
            <div className="introduction">
                <div className="image-container">
                    <img src="https://www.tljus.com/wp-content/uploads/2019/11/home_topBanner.jpg" />
                </div>
                <div className="introduction-text">
                    <h1 className="introduction-text-h1">Freshly Baked Everyday</h1>
                    <p>Offering a variety of bakery goods passionately made from the finest ingredients</p>
                </div>
            </div>

            <div className="featured-products-section">
                <h3>Feature Products</h3>
                <div className="featured-products-container">
                    <div className="featured-products-item">
                        <FeatureItem
                            imageUrl="https://www.tljus.com/wp-content/uploads/2022/08/Feature_Scones.png"
                            title="Scone"
                            description="Homemade style scone, a lovely vessel for your favorite jam"
                        />
                    </div>
                    <div className="featured-products-item">
                        <FeatureItem
                            imageUrl="https://www.tljus.com/wp-content/uploads/2022/07/Feature_ChocoCloudCake.png"
                            title="Strawberry Cake"
                            description="Cake covered in chocolate ganache whipped cream, topped with fresh berries and chocolate"
                        />
                    </div>
                    <div className="featured-products-item">
                        <FeatureItem
                            imageUrl="https://www.tljus.com/wp-content/uploads/2022/06/Feature_53.jpg"
                            title="Honeydew Melon Soft"
                            description="Soft honeydew-flavored bread filled with honeydew melon cream"
                        />
                    </div>
                </div>
                <footer>
                    @Copyright 2022
                </footer>
            </div>

        </div>
    )
}
export default Home;