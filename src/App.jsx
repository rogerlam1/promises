import React, { useState } from 'react';
import promisesData from './data.json';

function App() {
  const [promises] = useState(promisesData.promises);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Trump Promises Tracker</h1>
      <PromiseTable promises={promises} />
    </div>
  );
}

function PromiseTable({ promises }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Promise
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {promises.map((promise) => (
            <PromiseRow key={promise.id} promise={promise} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PromiseRow({ promise }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <tr className="bg-gray-900 hover:bg-gray-800 transition-colors duration-200">
      <td className="px-6 py-4 whitespace-normal" onClick={() => setExpanded(!expanded)} style={{cursor: 'pointer'}}>
        <div className="text-lg font-medium mb-1">
          {promise.title}
        </div>
        {expanded && (
          <div className="mt-2 pl-4">
            <p className="mt-1 text-sm">
              <strong className="font-medium">Promise Detail:</strong> {promise.details}
            </p>
             <p className="mt-1 text-sm">
              <strong className="font-medium">Status Detail:</strong> {promise.statusDetail}
            </p>
            {promise.sources && (
              <div className="mt-2">
                <strong className="font-medium text-sm">Sources:</strong>
                <ul className="list-disc pl-5 mt-1">
                  {Object.entries(promise.sources).map(([sourceName, sourceUrl], index) => (
                    <li key={index} className="text-sm">
                      <a
                        href={sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        {sourceName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm">{promise.status}</div>
      </td>
    </tr>
  );
}

export default App;
