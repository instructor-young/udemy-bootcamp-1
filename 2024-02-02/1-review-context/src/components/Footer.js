import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Footer() {
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("tab");
  const [tab, setTab] = useState(currentTab);

  useEffect(() => {
    setTab(currentTab);
  }, [currentTab]);

  return (
    <footer>
      <a href="https://www.naver.com">네이버 가기</a>
      <div>
        <Link to="?tab=comments" className="border">
          코멘트
        </Link>
        <Link to="?tab=applicants" className="border">
          참여자
        </Link>
      </div>

      <hr />
      {tab === "comments" && (
        <div>
          <ul>
            <li>코멘트1</li>
            <li>코멘트2</li>
            <li>코멘트3</li>
          </ul>
        </div>
      )}

      {tab === "applicants" && (
        <div>
          <ul>
            <li>참여자1</li>
            <li>참여자2</li>
            <li>참여자3</li>
          </ul>
        </div>
      )}
    </footer>
  );
}

export default Footer;
