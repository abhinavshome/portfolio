const styles = {
    sidebar: {
        marginLeft: '20px'
    },
  dp: {
    backgroundImage: "url(/images/dp.jpeg)",
    width: "260px",
    height: "350px",
    backgroundPositionX: "-207px",
  },
};

const SideBar = () => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.dp}></div>
      <div>
        <div>UPCOMING CLASSES</div>
        
      </div>
    </div>
  );
};

export default SideBar;
