type Props = { title: string };

export const Header = ({ title }: Props) => {
  return (
    <>
      <h1
        data-testid="heading-1"
        title="Header"
        className="text-slate-200 uppercase text-7xl"
      >
        {title}
      </h1>
    </>
  );
};
