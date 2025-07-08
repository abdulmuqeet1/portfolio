interface Props {
  id: string | number;
  src: string;
  type?: string;
  className?: string;
}

function Video({ id, src, type = 'video/mp4', className = '' }: Props) {
  return (
    <video id={id.toString()} autoPlay muted loop playsInline className={className}>
      <source src={src} type={type} />
    </video>
  );
}

export default Video;
