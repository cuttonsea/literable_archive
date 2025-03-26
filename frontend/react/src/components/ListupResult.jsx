import DownloadFile from "./DownloadFile";

function ListupResult({ results }) {
    return (
      <div>
        <h2>훈련세트 리스트</h2>
        <ul className='searchresult'>
          {results.map((result, index) => (
            <DownloadFile key={index} filename={result} />
          ))}
        </ul>
      </div>
    );
  }
  
export default ListupResult;