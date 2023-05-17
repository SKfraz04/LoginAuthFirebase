import ProtectedRoute from "@/Components/ProtectedRoute";

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <form className="form">
        <input type="file" />
        <button type="submit">Upload</button>
      </form>
    </ProtectedRoute>
  );
};

export default DashboardPage;
