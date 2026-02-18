import { useMemo, useState } from "react";
import { menuData } from "../../components/Card/MenuData";
import MenuCard from "../../components/Card/MenuCard";
import CategoryTabs from "../../components/Card/CategoryTabs";
import Button from '../../components/Button/Button'

export default function BestMenu() {
  const [activeCategory, setActiveCategory] = useState("all");

  // получаем уникальные категории
  const categories = useMemo(() => {
    const unique = [...new Set(menuData.map(item => item.category))];
    return [...unique];
  }, []);

  const filteredItems = menuData.filter(
    item => item.category === activeCategory
  );

  return (
    <section className="bestmenu">
      <div className="bestmenu__container container">
        <h2 className="bestmenu__title">Our Best & Delicious Menu</h2>
        <CategoryTabs
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="menu__grid">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        <div className="bestmenu__seeall">
        <Button className="bestmenu__btn ">
          See All
        </Button>
        </div>
      </div>
    </section>
  );
}
