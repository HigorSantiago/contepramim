import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import AddStoryPage from "../pages/AddStoryPage";
import StoryPage from "../pages/StoryPage";
import NeedHelpPage from "../pages/NeedHelpPage";
import StoryTypes from "../pages/StoryTypes";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/add-story" element={<AddStoryPage />} />
            <Route path="/story/:id" element={<StoryPage />} />
            <Route path="/need-help" element={<NeedHelpPage />} />
            <Route path="/story-types" element={<StoryTypes />} />
        </Route>
    )
)

export default router