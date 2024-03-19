type Contents = { name: string; price: number; isVerified: boolean };
type Menu = { title: string; buttonText: string; content: Contents[] };

export default function SideMenu({
  menu,
  contents,
}: {
  menu: Menu;
  contents: Contents;
}) {
  return (
    <div className="flex ">
      <div className="flex-col w-[10%]  border bg-slate-500">
        <button>{menu.buttonText}</button>
      </div>
    </div>
  );
}
