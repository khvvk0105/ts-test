type ObjType = {
  name: string;
  price: number;
  isVerifed: boolean;
};

type PropType = {
  title: string;
  buttonText: string;
  Contents: Array<ObjType>;
};

export default function ShowObject({ data }: { data: PropType }) {
  return (
    <div>
      <h1>{data.name}</h1>
      {/* <p>{data.Contents.price}</p> */}
    </div>
  );
}
