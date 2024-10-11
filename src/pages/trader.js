import Layout from '../layout'; // Импортируем Layout
import TraderDashboard from '../components/TraderDashboard';

export default function TraderPage() {
  return (
    <div>
      <Layout>
      <div className="bg-gray-100 min-h-screen p-6">
        <TraderDashboard />
      </div>
      </Layout>
    </div>
  );
}
