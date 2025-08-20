/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { LuLogIn } from "react-icons/lu";

function Header() {
  return (
    <div css={s.header}>
        <div>BOARD</div>
        <div>
            <ul>
                <li>게시판</li>
                <li>글쓰기</li>
            </ul>
        </div>
        <div>
            <ul>
                <li><LuLogIn /></li>
                <li><FiUserPlus /></li>
            </ul>
        </div>
    </div>
  );
}

export default Header;