import Layout from '../layout'; // Импортируем Layout
import CustomerDashboard from '../components/CustomerDashboard';

export default function CustomerPage() {
  return (
    <div>
      <Layout>
        <div className="bg-gray-100 min-h-screen p-6">
          <CustomerDashboard />
        </div>
      </Layout>
    </div>
  );
}
