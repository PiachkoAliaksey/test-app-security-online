import mockData from "../data/cardData";
import { formatNumWithDigits } from "../utils/formatNumWithDigits";
import { MAP_STATUS_COLOR } from "../data/constants";
import { convertDateTimeToLocal } from "../utils/convertDateTimeToLocal";
import { calculateTimeDifference } from "../utils/calculateTime";

export async function fetchCardData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(formatData(mockData));
        }, 1000);
    });
}

function formatData(data) {
    return {
        ...data,

        dateCreation: convertDateTimeToLocal(data.dateCreation),
        dateControl: convertDateTimeToLocal(data.dateControl),
        dateComplited: data.dateComplited ? convertDateTimeToLocal(data.dateComplited) : '',
        system: `${data.system} | ${data.typeOfApplication}`,
        object: Object.values(data.object).join(', '),
        numberApplication: formatNumWithDigits(data.numberApplication),
        colorTile: MAP_STATUS_COLOR[data.status],
        textApplication: data.textApplication,
        duration: data.dateComplited ? calculateTimeDifference(data.dateCreation, data.dateComplited) : ''
    }
}