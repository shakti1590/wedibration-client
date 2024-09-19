import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { approvedLoveStoryDetails } from "@/actions/loveStoryAction";

const LoveStories = () => {
  const [stories, setStories] = useState([]);
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.approvedLoveStory);

  useEffect(() => {
    dispatch(approvedLoveStoryDetails());
  }, [dispatch]);

  useEffect(() => {
    if (data && data.length) {
      // Map the backend data to extract only the required fields
      const fetchedStories = data.map((story) => ({
        id: story._id,
        coupleName: story.coupleName,
        story: story.loveStory, // Using `loveStory` from the backend
      }));
      setStories(fetchedStories);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <section className="page-header">
        <div className="row">
          <div className="col">
            <h1 className="text-[40px] font-bold">Love Stories</h1>
          </div>
        </div>
      </section>
      <div className="max-w-7xl pb-20 mx-auto">
        <div className="grid grid-cols-1 pt-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#F10081] mb-4">
                  {story.coupleName}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {story.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoveStories;
