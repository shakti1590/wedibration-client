import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import ServiceDetail from "./pages/ServiceDetail";
import CityServices from "./pages/CityServices";
import Vendors from "./pages/Vendors";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import ContactUs from "./pages/ContactUs";
import ProtectedRoute from "./components/ProtectedRoute";
import UserDashboard from "./components/UserDashboard";
import Dashboard from "./pages/admin/Dashboard";
import CityDashboard from "./pages/admin/CityDashboard";
import ServicesDashboard from "./pages/admin/ServicesDashboard";
import ServicesTypeDashboard from "./pages/admin/ServicesTypeDashboard";
import EventsDashboard from "./pages/admin/EventsDashboard";
import BlogDashboard from "./pages/admin/BlogDashboard";
import ListBusiness from "./pages/ListBusiness";
import VenueTour from "./pages/VenueTour";
import CheckAvailability from "./pages/CheckAvailability";
import Einvites from "./pages/Einvites";
import EditInvite from "./pages/EditInvite";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermConditions from "./pages/TermConditions";
import TourPackages from "./pages/TourPackages";
import BackToTop from "./components/BackToTop";
import Caterers from "./pages/caterers";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import AllProduct from "./pages/AllProduct";
import WeddingCards from "./pages/WeddingCards";
import BookWeddingCards from "./pages/BookWeddingCards";
import ProductDashboard from "./pages/admin/ProductDashboard";
import HoneymoonDashboard from "./pages/admin/HoneymoonDashboard";
import HoneymoonPackages from "./pages/HoneymoonPackages";
import LoveStories from "./pages/LoveStrories";
import ScrollTop from "./components/ScrollTop";
import LoveStoryDashboard from "./pages/admin/LoveStoryDashboard";
import MehendiArtists from "./pages/MehendiArtists";

function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/e-invites" element={<Einvites />} />
        <Route path="/edit-card/:cardId" element={<EditInvite />} />

        <Route
          path="/physical-invitation-card"
          element={<BookWeddingCards />}
        />
        <Route
          path="/physical-invitation-card/:label/:id"
          element={<WeddingCards />}
        />

        {/* <Route path="/edit-card" element={<EditInvite />} /> */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/new-vendor-setup-form" element={<ListBusiness />} />
        <Route path="/venue-tour" element={<VenueTour />} />
        <Route path="/check-availability" element={<CheckAvailability />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/:city" element={<CityServices />} />
        <Route path="/vendors/:city/:category" element={<Vendors />} />
        <Route
          path="/:category/:vendorSlug/:vendorId"
          element={<ServiceDetail />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-conditions" element={<TermConditions />} />

        {/* HoneyMoon pages routes */}
        <Route path="/honeymoon-package" element={<HoneymoonPackages />} />
        {/* <Route path="/kashmir-tour-package" element={<TourPackages />} /> */}

        <Route path="/caterers" element={<Caterers />} />
        {/* <Route path="/makeup-artist" element={<Caterers />} /> */}
        <Route path="/mehendi-artists" element={<MehendiArtists />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product-page/:id" element={<ProductPage />} />
        <Route path="/all-product" element={<AllProduct />} />
        <Route path="/love-stories" element={<LoveStories />} />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/city"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <CityDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/services"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ServicesDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/service-type"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ServicesTypeDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <EventsDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog-dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <BlogDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product-dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ProductDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/honeymoon-dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <HoneymoonDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/loveStory-dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <LoveStoryDashboard />
            </ProtectedRoute>
          }
        />

        {/* <Route path="/user-dashboard" element={<UserDashboard />} /> */}
      </Routes>
      <BackToTop />
    </>
  );
}

export default App;
