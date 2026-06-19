"use client";

import { Filter, ChevronDown } from "lucide-react";

export type SegmentFilterOption = {
    id: string;
    name: string;
};

type SegmentFilterProps = {
    value: string;
    onChange: (value: string) => void;
    segments: SegmentFilterOption[];
    inputClassName: string;
    textClassName: string;
    mutedTextClassName: string;
};

export default function SegmentFilter({
    value,
    onChange,
    segments,
    inputClassName,
    textClassName,
    mutedTextClassName,
}: SegmentFilterProps) {
    return (
        <div className="relative w-full md:w-72">
            <Filter
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none ${mutedTextClassName}`}
            />

            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`w-full pl-10 pr-10 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#588157]/40 transition-all appearance-none cursor-pointer ${inputClassName} ${textClassName}`}
            >
                <option value="all">All Segments</option>

                {segments.map((segment) => (
                    <option key={segment.id} value={segment.id}>
                        {segment.name}
                    </option>
                ))}
            </select>

            <ChevronDown
                className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${mutedTextClassName}`}
            />
        </div>
    );
}