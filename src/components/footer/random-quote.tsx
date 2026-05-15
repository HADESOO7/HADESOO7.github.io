"use client";

import React, { useEffect, useState } from "react";

const quotes = [
    "“Talk is cheap. Show me the code.” – Linus Torvalds",
    "“First, solve the problem. Then, write the code.” – John Johnson",
    "“Make it work, make it right, make it fast.” – Kent Beck",
    "“Simplicity is the soul of efficiency.” – Austin Freeman",
    "“Truth can only be found in one place: the code.” – Robert C. Martin",
    "“Before software can be reusable it first has to be usable.” – Ralph Johnson",
    "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
    "“Fix the cause, not the symptom.” – Steve Maguire",
    "“I'm not a great programmer; I'm just a good programmer with great habits.” – Kent Beck",
    "“Don't comment bad code - rewrite it.” – Brian Kernighan",
];

const RandomQuote = () => {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, []);

    if (!quote) return null;

    return (
        <div className="flex items-center">
            <p className="text-xs italic text-gray-600 dark:text-gray-300 text-right">
                {quote}
            </p>
        </div>
    );
};

export default RandomQuote;
