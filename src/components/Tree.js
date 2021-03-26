const Tree = ({ height, width, color }) => {
  const stumpWidth = width / 5;
  const stumpHeight = height / 5;

  const colorMarginTop = color ? 0 : 10;
  const colorMarginBottom = color ? 10 : 0;

  const screenMidX = width / 2;
  const stumpX = screenMidX - stumpWidth / 2;
  const stumpY = height - stumpHeight - colorMarginBottom;

  return (
    <div
      style={{
        width: width,
        height: height,
        marginLeft: Math.random() * 20 - 10,
        marginBottom: Math.random() * 80 - 80,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <path
          fill={color ? "#7CB46B" : "#397f03"}
          d={`M${screenMidX} ${colorMarginTop} L${width} ${stumpY} L0 ${stumpY} `}
        />
        <rect
          x={stumpX}
          y={stumpY}
          width={stumpWidth}
          height={stumpHeight}
          fill="#9B4D18"
        />
      </svg>
    </div>
  );
};

export default Tree;
