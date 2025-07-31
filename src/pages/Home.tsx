import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">📘 英语学习 App</h1>
      <div className="space-x-4">
        <Link to="/daily" className="px-4 py-2 bg-blue-500 text-white rounded">每日打卡</Link>
        <Link to="/review" className="px-4 py-2 bg-green-500 text-white rounded">复习列表</Link>
      </div>
    </div>
  );
}

export default Home;
