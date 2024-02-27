import React, { useState } from 'react';
import { storage } from "../firebase";
import {
    ref,
    uploadBytes,
    listAll,
    list,
    getDownloadURL,
    uploadBytesResumable,
  } from "firebase/storage";

function EnterNames() {
    const [ids, setIds] = useState({});
    const [vidUrl, setVidUrl] = useState(null);

    const handleIdChange = (index, value) => {
        setIds(prevIds => ({
            ...prevIds,
            [index]: {
                ...prevIds[index],
                id: value
            }
        }));
    };

    const handlePlayerChange = (index, value) => {
        setIds(prevIds => ({
            ...prevIds,
            [index]: {
                ...prevIds[index],
                player: value
            }
        }));
    };

    const renderTextboxes = () => {
        const textboxes = [];
        for (let i = 0; i < 11; i++) {
            textboxes.push(
                <div key={i}>
                    <input
                        type="text"
                        value={ids[i]?.id || ''}
                        placeholder="ID"
                        onChange={e => handleIdChange(i, e.target.value)}
                    />
                    <input
                        type="text"
                        value={ids[i]?.player || ''}
                        placeholder="Player"
                        onChange={e => handlePlayerChange(i, e.target.value)}
                    />
                </div>
            );
        }
        return textboxes;
    };

    React.useEffect(() => {
        const imageRefUrl = ref(
            storage,
            'gs://uploadimage-2ed90.appspot.com/video'
          );
          getDownloadURL(imageRefUrl)
            .then((url) => {
              setVidUrl(url);
              console.log(`Video URL: ${vidUrl}`);
            })
            .catch((error) => {
              console.error("Error retrieving Video URL:", error);
            });
    });

    return (
        <div>
            {/* Textboxes on the left side */}
            <div style={{ float: 'left', marginRight: '10px' }}>
                {renderTextboxes()}
            </div>
            {/* Empty space for the video */}
            <div style={{ float: 'left', width: '500px', height: '300px', border: '1px solid black' }}>
                <video controls width="500"
                src={vidUrl}></video>
            </div>
            {/* Textboxes on the right side */}
            <div style={{ float: 'left', marginLeft: '10px' }}>
                {renderTextboxes()}
            </div>
            <div style={{ clear: 'both' }}></div>
        </div>
    );
}

export default EnterNames;
