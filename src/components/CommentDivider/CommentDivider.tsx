import "./CommentDivider.scss";

interface Props {
  comment: string;
}

export default function CommentDivider(props: Props) {
  const { comment } = props;

  return (
    <div className="main-comment">
      <h1 className="comment">{comment}</h1>
    </div>
  );
}
