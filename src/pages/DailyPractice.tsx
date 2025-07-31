function DailyPractice() {
  const words = ['apple', 'banana', 'computer', 'develop']; // 可替换为自动生成的词
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">📅 每日打卡</h2>
      <ul className="space-y-2">
        {words.map((word, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded">{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default DailyPractice;
