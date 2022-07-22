import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from "./directory-item.styles.jsx";
import { useNavigate } from "react-router-dom";

function DirectoryItem({ category }) {
  const linkNavigateHander = () => navigate(route);
  const navigate = useNavigate();

  let { title, imageUrl, route } = category;
  return (
    <DirectoryItemContainer onClick={linkNavigateHander}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
