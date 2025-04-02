import React, { useEffect,useRef } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { debounce } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { updateContent } from "@/features/Email/EmailSlice";
import { RootState } from "@/app/store/store";

export default function ContentArea() {
    const htmlContent = useSelector((state: RootState) => state.Email.content);
    const dispatch = useDispatch();
    const [previewUrl, setPreviewUrl] = React.useState<string>("/preview.html");

    // Debounced Save Function
    const saveHtml = debounce(async (content: string) => {
        try {
            const response = await axios.post("/api/SaveHtml", { content });
            if (response.status === 200) {
                setPreviewUrl(`/preview.html?time=${Date.now()}`); // Cache-busting
            }
        } catch (error) {
            console.error("Error saving HTML:", error);
        }
    }, 500);

    const SaveHtmlRef = useRef(saveHtml)

    useEffect(() => {
        if (typeof htmlContent === "string" && htmlContent.trim()) {
            SaveHtmlRef.current(htmlContent);
        }
    }, [htmlContent]);
    

    return (
        <PanelGroup autoSaveId="example" direction="horizontal" className="flex p-5 gap-1">
            <Panel defaultSize={50} minSize={30} className="shadow-md rounded-2xl overflow-hidden">
                <Editor
                    height="100%"
                    width="100%"
                    theme="light"
                    language="html"
                    value={htmlContent}
                    onChange={(value) => dispatch(updateContent(value || ""))}
                    options={{
                        scrollbar: { vertical: "auto", horizontal: "auto" },
                        minimap: { enabled: false },
                        fontSize: 14,
                        automaticLayout: true,
                        quickSuggestions: true,
                        suggestOnTriggerCharacters: true,
                        autoClosingQuotes: "always",
                        autoClosingBrackets: "always",
                        tabCompletion: "on",
                        wordBasedSuggestionsOnlySameLanguage: true,
                    }}
                />
            </Panel>

            <PanelResizeHandle className="w-[4px]" />

            <Panel className="shadow-md rounded-2xl p-3 bg-white">
                <iframe
                    src={previewUrl}
                    title="Preview"
                    className="w-full h-full border-none iframe"
                    sandbox="allow-scripts"
                    style={{
                        overflow: "hidden",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                />
            </Panel>
        </PanelGroup>
    );
}
