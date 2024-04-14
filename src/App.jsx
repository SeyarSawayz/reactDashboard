import OrderTable from "./components/orderTable";
import SalesChart from "./components/salesChart";
import StateCards from "./components/stateCards";
import Layout from "./layout";

const App = () => {
  return (
    <Layout>
      <StateCards />
      <SalesChart />
      <OrderTable />
    </Layout>
  );
};

export default App;
