<?php


namespace BxUI\Component;


use BxHelper\Helper\Html;

/**
 * Class MultiSelect
 * @package BxUI\Component
 * @license MIT
 *
 * @author AlexP007
 * @email alex.p.panteleev@gmail.com
 * @link https://github.com/AlexP007/bx-ui
 */
class MultiSelect extends Basic
{
    const CONTAINER = 'bx-ui-multiselect-container';
    const MASTER = 'bx-ui-select-master';
    const SLAVE = 'bx-ui-select-slave';

    protected function create(): array
    {
        $helper = Html::getInstance();
        $params = $this->params;

        $first = $params['first'];
        $second = $params['second'];
        $container = $params['container'];
        $data = json_encode($params['data'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

        // Установим массив options
        [$firstOptions, $secondOptions] = $this->setOptions($data);

        $firstSelect = new Select([
            'name'              => $first['name'],
            'type'              => self::MASTER,
            'class'             => $first['class'],
            'prompt'            => $first['prompt'],
            'options'           => $firstOptions,
            'list_class'        => $first['list_class'],
            'list_active_class' => $first['list_active_class'],
            'icon_closed'       => $first['icon_closed'],
            'icon_opened'       => $first['icon_opened'],
        ]);

        $secondSelect = new Select([
            'name'              => $second['name'],
            'type'              => self::SLAVE,
            'class'             => $second['class'],
            'prompt'            => $second['prompt'],
            'options'           => $secondOptions,
            'list_class'        => $second['list_class'],
            'list_active_class' => $second['list_active_class'],
            'icon_closed'       => $second['icon_closed'],
            'icon_opened'       => $second['icon_opened'],
        ]);

        $content = implode($firstSelect, $secondSelect);

        return [
            $helper->div($content, $container['class'], [
                'attributes' => [
                    'data-type' => self::CONTAINER,
                    'data-props' => $data,
                ]
            ])
        ];
    }

    private function setOptions(array $data): array
    {
        $firstData = array_column(
            $data,
            'first_value',
            'first_text'
        );
        $firstOptions = [];

        foreach ($firstData as $key => $value) {
            array_push($firstOptions, ['value' => $key, 'content' => $value]);
        }

        $secondData =  array_column(
            $data,
            'second_value',
            'second_text'
        );
        $secondOptions = [];

        foreach ($secondData as $key => $value) {
            array_push($secondOptions, ['value' => $key, 'content' => $value]);
        }

       return [$firstOptions, $secondOptions];
    }
}