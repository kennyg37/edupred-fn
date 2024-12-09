import { Header } from "./Header";

export const Predict = () => {
    return(
        <div>
            <Header/>
            <div>
                <div className="bg-teal-900 rounded-sm p-5 ">
                    <div>
                        <h2>District prediction Model</h2>
                        <p>This uses a synthetic dataset that can be used to classify districts according to different academic indicators</p>
                        <p>With this model volunteers and donors can give out donations that are calculated</p>
                        <p>according to the needs of the district</p>
                        <p>The government can also use such model for informed educational decisions</p>
                    </div>
                    <button>
                        <a href="/models/districts">View Model</a>
                    </button>
                </div>
                <div>
                    <div>
                        <h2>Students prediction Model</h2>
                        <p>This dataset that can be used to classify students in grades using various data gpa included</p>
                        <p>With this model teachers can adjust their teaching methods with regards to the student predicted gpa</p>
                        <p>Parents can also use this dataset to help their children</p>
                    </div>
                    <button>
                        <a href="/models/students">View Model</a>
                    </button>
                </div>
            </div>
        </div>
    )
};