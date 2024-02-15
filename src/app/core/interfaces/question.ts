import { AbstractResponse } from "./abstract-response";
import { Option } from "./option";

export interface Question extends AbstractResponse {
    text: string;
    imageUrl: string;
    type: string; // You might want to create an enum for question types
    time: number;
    options: Option[];
}
