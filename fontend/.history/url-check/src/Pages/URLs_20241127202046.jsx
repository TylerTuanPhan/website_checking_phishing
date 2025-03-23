const URLs = () => {
  const styles = {
    container: {
      textAlign: "center",
      backgroundColor: "#1a1a2e",
      color: "#d3d3d3",
      padding: "2rem",
      width: "60%",
      margin: "0 auto",
    },
    icon: {
      fontSize: "4rem",
      color: "#87cefa",
      marginBottom: "1rem",
    },
    inputWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "1.5rem",
    },
    textField: {
      width: "70%",
      padding: "0.5rem",
      fontSize: "1rem",
      borderRadius: "5px 0 0 5px",
      border: "1px solid #444",
      backgroundColor: "#2e2e4d",
      color: "#d3d3d3",
      outline: "none",
    },
    description: {
      fontSize: "0.9rem",
      color: "#b0b0c3",
      lineHeight: "1.5",
    },
    link: {
      color: "#87cefa",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>
        <i className="fas fa-globe"></i> {/* Biểu tượng icon */}
      </div>
      <div style={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Search or scan a URL"
          style={styles.textField}
        />
        {/* Thay thế button Scan bằng button pushable */}
        <button className="pushable">
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front"> Scan </span>
        </button>
      </div>
      <p style={styles.description}>
        By submitting data above, you are agreeing to our{" "}
        <a href="#" style={styles.link}>
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" style={styles.link}>
          Privacy Notice
        </a>
        , and to the <strong>sharing of your URL submission</strong> with the
        security community. Please do not submit any personal information; we
        are not responsible for the contents of your submission.{" "}
        <a href="#" style={styles.link}>
          Learn more.
        </a>
      </p>

      {/* Chèn CSS vào trong thẻ <style> */}
      <style jsx>{`
        .pushable {
          position: relative;
          background: transparent;
          padding: 0px;
          border: none;
          cursor: pointer;
          outline-offset: 4px;
          outline-color: deeppink;
          transition: filter 250ms;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        .shadow {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: hsl(226, 25%, 69%);
          border-radius: 8px;
          filter: blur(2px);
          will-change: transform;
          transform: translateY(2px);
          transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
        }

        .edge {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          border-radius: 8px;
          background: linear-gradient(
            to right,
            hsl(248, 39%, 39%) 0%,
            hsl(248, 39%, 49%) 8%,
            hsl(248, 39%, 39%) 92%,
            hsl(248, 39%, 29%) 100%
          );
        }

        .front {
          display: block;
          position: relative;
          border-radius: 8px;
          background: hsl(248, 53%, 58%);
          padding: 16px 32px;
          color: white;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-size: 1rem;
          transform: translateY(-4px);
          transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
        }

        .pushable:hover {
          filter: brightness(110%);
        }

        .pushable:hover .front {
          transform: translateY(-6px);
          transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
        }

        .pushable:active .front {
          transform: translateY(-2px);
          transition: transform 34ms;
        }

        .pushable:hover .shadow {
          transform: translateY(4px);
          transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
        }

        .pushable:active .shadow {
          transform: translateY(1px);
          transition: transform 34ms;
        }

        .pushable:focus:not(:focus-visible) {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default URLs;
