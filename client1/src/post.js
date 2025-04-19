import "./App.css";

export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://ca.jackery.com/cdn/shop/articles/Best_Computer_Battery_Backup.webp"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Full house Battery backup comming later this year</h2>
        <p className="info">
          <a href="#" className="author">
            Naveen chamara
          </a>
          <time>2025-01-27</time>
        </p>
        <p className="summery">
          As someone who experiences regular power outages due to storms and
          random occurrences, I've learned that having a backup plan for
          electric outages is essential for my home. While you can always use
        </p>
      </div>
    </div>
  );
}
