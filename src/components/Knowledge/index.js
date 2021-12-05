import Item from "../Item";
import knowledgeList from "./KnowledgeList.json";
import { KnowledgeContainer } from "./styles";

export const Knowledge = () => {
  return (
    <>
      <h1>Mis conocimientos</h1>
      <KnowledgeContainer>
        {Object.keys(knowledgeList).map((key) => (
          <Item
            key={key}
            imgSrc={knowledgeList[key].imgSrc}
            imgDescription={knowledgeList[key].imgDescription}
            generalDescription={knowledgeList[key].generalDescription}
            Name={knowledgeList[key].languageName}
          />
        ))}
      </KnowledgeContainer>
    </>
  );
};
