import Button from "./Button";

export default function Card({
  title,
  description,
  img,
  urlDeploy,
  urlRepoBackend,
}) {
  return (
    <div className="flex flex-col h-full rounded-lg border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-gray-100 font-mono">
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <p className="mb-6 text-gray-700 flex-grow">{description}</p>

      <div className="flex flex-wrap gap-3 mt-auto justify-around">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-contain mb-4 rounded-md"
        />
        {urlDeploy && <Button href={urlDeploy} text="Deploy" />}
        {urlRepoBackend && <Button href={urlRepoBackend} text="Repository" />}
      </div>
    </div>
  );
}
