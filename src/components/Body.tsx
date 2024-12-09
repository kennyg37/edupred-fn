import EducationArt from '../assets/art.svg';

export const Body = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-teal-900 mb-4">Welcome to Edupred</h1>
                <span className="text-xl text-gray-700 mb-2 block">A revolution education needs</span>
                <p className="text-lg text-gray-600 mb-6">
                    Edupred offers you models that help make calculated education oriented decisions.<br />
                    With edupred, education is on the verge of a technical evolution.
                </p>
                <button className="px-6 py-2 bg-teal-900 text-white rounded hover:bg-teal-600 transition duration-300">
                    Explore
                </button>
            </div>
            <div>
                <img src={EducationArt} alt="Education Art" className="max-w-full h-auto" />
            </div>
        </div>
    );
};