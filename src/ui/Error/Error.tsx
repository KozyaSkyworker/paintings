import cls from './Error.module.scss';

export type ErrorProps = {
  msg: string;
  externalClass?: string;
};

const Error = (props: ErrorProps) => {
  const { msg, externalClass = '' } = props;
  return (
    <div className={`${cls.error} ${externalClass}`}>
      <p className={`${cls.error__text} paragraph_big_light`}>
        {/* No matches for <span className="paragraph_big_medium">{msg}</span> */}
      </p>
      <p className={`${cls.error__secondary__text} paragraph_big_light`}>
        Please try again with a different spelling or keywords.
      </p>
    </div>
  );
};

Error.defaultProps = {
  externalClass: '',
};

export default Error;
