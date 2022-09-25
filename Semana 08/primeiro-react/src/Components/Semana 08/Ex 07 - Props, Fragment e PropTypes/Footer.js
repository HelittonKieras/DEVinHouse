export default function PostFooter({ qtdCurtidas, curtidoPor }) {
  return (
    <div className="Footer">
      <div className="FooterUp">
        <div className="HeartComments">
          <img
            className="Heart"
            src={
              qtdCurtidas >= 1
                ? "https://cdn-icons-png.flaticon.com/512/535/535183.png"
                : "https://cdn-icons-png.flaticon.com/512/1000/1000621.png"
            }
            alt="curtir"
          />
          <span>10 Comments</span>
        </div>
        <p>Share</p>
      </div>
      {qtdCurtidas == 1 && (<p className="Liked">Liked by{" "}
          <strong>
            {curtidoPor}
          </strong>
        </p>
      )}
      {qtdCurtidas == 2 && (<p className="Liked">Liked by{" "}
          <strong>
            {curtidoPor} and {qtdCurtidas-1} other{" "}
          </strong>
        </p>
      )}
      {qtdCurtidas >= 3 && (<p className="Liked">Liked by{" "}
          <strong>
            {curtidoPor} and {qtdCurtidas-1} others{" "}
          </strong>
        </p>
      )}
    </div>
  );
}