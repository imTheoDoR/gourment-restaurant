"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { TimePickerInput } from "@/components/time-picker-input";
import { FaRegClock } from "react-icons/fa6";

export function TimePickerWrapper({ date, setDate }: TimePickerWrapperProps) {
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);
  const secondRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-end gap-2">
      <div className="grid text-center">
        <Label htmlFor="hours" className="text-xs text-dark/50">
          Hours
        </Label>
        <TimePickerInput
          picker="hours"
          date={date}
          setDate={setDate}
          ref={hourRef}
          onRightFocus={() => minuteRef.current?.focus()}
        />
      </div>
      <div className="grid text-center">
        <Label htmlFor="minutes" className="text-xs text-dark/50">
          Minutes
        </Label>
        <TimePickerInput
          picker="minutes"
          date={date}
          setDate={setDate}
          ref={minuteRef}
          onLeftFocus={() => hourRef.current?.focus()}
          onRightFocus={() => secondRef.current?.focus()}
        />
      </div>
    </div>
  );
}
