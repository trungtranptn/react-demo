import "../App.css";
type props = {};

export const Body = () => {
  return (
    <>
      <div className="flex width-full height-body">
        <div className="width-70">
          <div className="border">
            <h3>Big Title</h3>
          </div>
          <div className="border width-80">
            <div>
              <h4>Title 01</h4>
              <p>Learning ReactJs + TypeScript</p>
            </div>
            <div>
              <h4>Title 02</h4>
              <p>Learning ReactJs + TypeScript</p>
            </div>
            <div>
              <h4>Title 03</h4>
              <p>Learning ReactJs + TypeScript</p>
            </div>
          </div>
        </div>
        <div className="flex text-center border width-30 height-full">
          <h3>ASIDE</h3>
        </div>
      </div>
      <div className="flex justify-content-sb border">
        <div className="flex text-center box">
          <p>Box 1</p>
        </div>
        <div className="flex text-center box">
          <p>Box 2</p>
        </div>
        <div className="flex text-center box">
          <p>Box 3</p>
        </div>
        <div className="flex text-center box">
          <p>Box 4</p>
        </div>
      </div>
    </>
  );
};
