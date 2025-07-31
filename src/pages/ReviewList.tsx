function ReviewList() {
  const reviewedWords = ['apple', 'banana']; // 示例，未来接数据库或本地缓存
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">📚 复习列表</h2>
      {reviewedWords.length === 0 ? (
        <p>暂无复习内容</p>
      ) : (
        <ul className="space-y-2">
          {reviewedWords.map((word, index) => (
            <li key={index} className="p-2 bg-yellow-100 rounded">{word}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReviewList;
