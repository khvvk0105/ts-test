type ObjType = {
  name: string;
  price: number;
  isVerifed: boolean;
};

type PropType = {
  title: string;
  buttonText: string;
  Content: Array<ObjType>;
};

export default function ShowObject({ data }: { data: PropType }) {
  return (
    <div>
      <h1>{}</h1>
      <p>{}</p>
    </div>
  );
}
