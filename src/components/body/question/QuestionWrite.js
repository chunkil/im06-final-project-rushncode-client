import React from 'react';

const QuestionWrite = ({
  tags, title, reward, onTagChange, onTitleChange, onRewardChange,
}) => (
  <div>
    {/* 태그 */}
    <div className="write-title">태그</div>
    <div className="input-group-prepend input-group-lg QuestionWriteTag">
      <div>
        <div className="QuestionWriteTagTitle">
          <span className="input-group-text QuestionWriteTagTitle" id="basic-addon1">
            태그를 최대 3개 까지 선택해 주세요
          </span>
        </div>
        <div className="form-check form-check-inline QuestionWriteTagInputBox">
          <form>
            {tags.map(item => (
              <label
                className="form-check-label QuestionWriteTagInput"
                htmlFor={item.tag}
                key={item.id}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item.tag}
                  onChange={event => onTagChange(event)}
                />
                {item.tag}
              </label>
            ))}
          </form>
        </div>
      </div>
    </div>

    {/* 입력 폼 */}
    <div className="write-title">제목</div>
    <div className="input-group-prepend input-group-lg QuestionWriteInput">
      <input
        type="text"
        className="form-control inputTitle"
        name="title"
        value={title}
        placeholder="제목을 입력하세요"
        onChange={event => onTitleChange(event)}
      />
    </div>
    <div className="write-title">금액</div>
    <div className="input-group-prepend input-group-lg QuestionWriteMoney">
      <input
        type="text"
        className="form-control inputReward"
        name="reward"
        value={reward}
        placeholder="금액을 입력하세요"
        onChange={event => onRewardChange(event)}
      />
    </div>
  </div>
);

export default QuestionWrite;